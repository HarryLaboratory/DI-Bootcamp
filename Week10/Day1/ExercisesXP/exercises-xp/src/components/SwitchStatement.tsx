import React from 'react';

const getAction = (role: string): string => {
  switch (role) {
    case "admin":
      return "Manage users and settings";
    case "editor":
      return "Edit content";
    case "viewer":
      return "View content";
    case "guest":
      return "Limited access";
    default:
      return "Invalid role";
  }
};

const SwitchStatement: React.FC = () => {
  console.log(getAction("admin")); // Outputs: Manage users and settings
  console.log(getAction("editor")); // Outputs: Edit content
  console.log(getAction("viewer")); // Outputs: View content
  console.log(getAction("guest")); // Outputs: Limited access
  console.log(getAction("unknown")); // Outputs: Invalid role

  return <div>Check the console for role actions!</div>;
};

export default SwitchStatement;
