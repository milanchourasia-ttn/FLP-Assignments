// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const aboutApi = {
    "title": "About the company",
    "description": "Web design and development, Internet marketing, Database management, Data analytics, AI, Infrastructure services, Cyber security, Blockchain, Mobile application, and Consulting.",
    "employees": [
      { employID: "1122", name: "Amit", designation: "TL" },
      { employID: "1848", name: "Milan", designation: "ATL" },
      { employID: "1858", name: "Raushan", designation: "ATL" },
    ]
}
export default function handler(req, res) {
  res.status(200).json(aboutApi);
}
