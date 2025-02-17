
export const jsonToConfluenceWiki = (issues) => {
    const headers = ["Lösungsversion", "Issue Key", "Assignee"];
    let table = `|| ${headers.join(" || ")} ||\n`;
  
    // Sortiere die Issues nach Assignee
    issues.sort((a, b) => {
      const assigneeA = a.fields.assignee?.displayName || "?";
      const assigneeB = b.fields.assignee?.displayName || "?";
      return assigneeA.localeCompare(assigneeB);
    });
  
    issues.forEach(issue => {
      const fields = issue.fields;
      
      // Alle Lösungsversionen extrahieren und als Status-Widget mit neuer Zeile setzen
      const fixVersions = fields.fixVersions?.map(v => `{status:color=Grey|title=${v.name}}`).join(" \\\\") || "-";
      
      // Assignee mit Confluence Benutzer verknüpfen
      const assignee = fields.assignee 
        ? `[~${fields.assignee.name}]` // Confluence Benutzerverlinkung
        : "-";
      
      const row = [
        fixVersions, // Lösungsversionen als Status-Widgets untereinander
        `{jira:${issue.key}}`, // Jira-Makro für die Verlinkung
        assignee
      ];
      table += `| ${row.join(" | ")} |\n`;
    });
  
    return table;
  };
  

export const jsonToConfluenceWikiSprint = (issues) => {
    // Sprint-Informationen extrahieren (erster gefundener Sprint)
    let sprintInfo = "";
    const firstSprint = issues.find(issue => issue.fields.customfield_10100)?.fields.customfield_10100[0];
    
    if (firstSprint) {
      const sprintStartRaw = firstSprint.match(/startDate=([^,]+)/)?.[1] || "🛫";
      const sprintEndRaw = firstSprint.match(/endDate=([^,]+)/)?.[1] || "🛬";
      const sprintGoal = firstSprint.match(/goal=([^,]+)/)?.[1] || "Kein Ziel definiert";
      
      // Datumsformat ins deutsche Format umwandeln und Stunden runden
      const formatDate = (dateString) => {
        if (dateString === "Unbekannt") return dateString;
        const dateObj = new Date(dateString);
        const formattedDate = dateObj.toLocaleDateString("de-DE");
        const formattedTime = dateObj.getHours() + ":00";
        return `${formattedDate} ${formattedTime} Uhr`;
      };
      
      const sprintStart = formatDate(sprintStartRaw);
      const sprintEnd = formatDate(sprintEndRaw);
      
      sprintInfo = `*📆 Zeitraum:* 🛫 {status:color=Grey|title=${sprintStart}} → 🛬 {status:color=Grey|title=${sprintEnd}}  \n` +
                   `*🏁 Sprint-Ziel:* \n ${sprintGoal}`;
    }
    
    return sprintInfo;
  };
  