const data = {
  categories: [
    {
      id: "cspm-dashboard",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "2 Total",
          flag: true,
        },
        {
          id: "cloud-risk-assessment",
          name: "Cloud Account Risk Assessment",
          text: "9659 Total",
          flag: true,
        },
      ],
    },
    {
      id: "cwpp-dashboard",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "namespace-alerts",
          name: "Top 5 namespace specific alerts",
          text: "No graph data ",
          flag: true,
        },
        {
          id: "workload-alerts",
          name: "Workload Alerts",
          text: "32 Critical Issues",
          flag: false,
        },
        {
          id: "container-compliance",
          name: "Container Compliance",
          text: "85% Compliant",
          flag: true,
        },
      ],
    },
    {
      id: "images-dashboard",
      name: "Registry Scan",
      widgets: [
        {
          id: "image-risk-assessment",
          name: "Image Risk Assessment",
          text: "14342 Total Errors",
          flag: true,
        },
        {
          id: "image-security-issues",
          name: "Image Security Issues",
          text: "27 Images",
          flag: true,
        },
        {
          id: "scan-results",
          name: "Scan Results",
          text: "28 Images Scanned",
          flag: false,
        },
        {
          id: "vulnerability-severity",
          name: "Vulnerability Severity",
          text: "No results",
          flag: false,
        },
      ],
    },
  ],
};

export default data;
