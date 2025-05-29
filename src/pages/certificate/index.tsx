import {Award,CheckCircle,Clock,Download,ExternalLink,Star,} from "lucide-react";
import React from "react";
import jsPDF from "jspdf";

const Index = () => {
  const userName = "John Doe"; 
    const certificates = [
    {
      id: 1,
      name: "Google Data Analytics Professional Certificate",
      provider: "Google",
      issueDate: "March 2024",
      expirationDate: "No Expiration",
      credentialID: "GDAPC-123456",
      skills: [
        "Data Analysis",
        "SQL",
        "R Programming",
        "Tableau",
        "Data Visualization",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      status: "completed",
      grade: 98,
      hours: 180,
    },
    {
      id: 2,
      name: "Meta Front-End Developer Professional Certificate",
      provider: "Meta",
      issueDate: "February 2024",
      expirationDate: "No Expiration",
      credentialID: "MFEPC-789012",
      skills: ["React", "JavaScript", "HTML", "CSS", "Web Development"],
      image:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?auto=format&fit=crop&w=800&q=80",
      status: "completed",
      grade: 95,
      hours: 160,
    },
    {
      id: 3,
      name: "IBM Data Science Professional Certificate",
      provider: "IBM",
      issueDate: "In Progress",
      expirationDate: "-",
      credentialID: "-",
      skills: [
        "Python",
        "Machine Learning",
        "Data Science",
        "Statistical Analysis",
      ],
      image:
        "https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&w=800&q=80",
      status: "in-progress",
      progress: 75,
      hours: 120,
    },
  ];

  const generateCertificate = (cert: any) => {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: "a4",
    });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    doc.setDrawColor("#0056D2");
    doc.setLineWidth(4);
    doc.rect(20, 20, pageWidth - 40, pageHeight - 40, "S");

    doc.setFont("Helvetica", "bold");
    doc.setTextColor("#0056D2");
    doc.setFontSize(32);
    doc.text("Certificate of Completion", pageWidth / 2, 100, {
      align: "center",
    });

    doc.setFontSize(16);
    doc.setFont("Helvetica", "normal");
    doc.setTextColor("#333");
    doc.text("This certifies that", pageWidth / 2, 150, {
      align: "center",
    });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(26);
    doc.setTextColor("#000");
    doc.text(userName, pageWidth / 2, 190, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor("#333");
    doc.text("has successfully completed the course", pageWidth / 2, 230, {
      align: "center",
    });

    doc.setFont("Helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor("#000");
    doc.text(cert.name, pageWidth / 2, 260, { align: "center" });

    doc.setFont("Helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor("#333");
    doc.text(`Issued by ${cert.provider}`, pageWidth / 2, 300, {
      align: "center",
    });

    doc.text(`Date of Completion: ${cert.issueDate}`, pageWidth / 2, 330, {
      align: "center",
    });

    doc.setDrawColor("#888");
    doc.line(pageWidth / 2 - 100, 400, pageWidth / 2 + 100, 400);
    doc.setFontSize(12);
    doc.text("Authorized Signature", pageWidth / 2, 415, {
      align: "center",
    });

    doc.save(`${cert.name}_Certificate.pdf`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">My Certificates</h1>
              <p className="text-gray-600 mt-1">
                Track your learning achievements and credentials
              </p>
            </div>
            <button className="px-4 py-2 bg-[#0056D2] text-white rounded-md hover:bg-blue-700 transition-colors">
              Browse More Courses
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <StatCard icon={<Award className="h-8 w-8 text-blue-600" />} title="Total Certificate" value="3" />
          <StatCard icon={<Clock className="h-8 w-8 text-blue-600" />} title="Learning Hours" value="460" />
          <StatCard icon={<Star className="h-8 w-8 text-blue-600" />} title="Average Grade" value="96.5%" />
          <StatCard icon={<CheckCircle className="h-8 w-8 text-blue-600" />} title="Completed" value="2/3" />
        </div>

        <div className="grid grid-cols-1 gap-6">
          {certificates.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex">
                <div className="w-64 h-48">
                  <img src={cert.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">{cert.name}</h2>
                      <p className="text-gray-600">{cert.provider}</p>
                    </div>
                    <div className="flex space-x-2">
                      {cert.status === "completed" ? (
                        <>
                          <button
                            onClick={() => generateCertificate(cert)}
                            className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50"
                          >
                            <Download className="h-4 w-4" />
                            <span>Download</span>
                          </button>
                          <button className="flex items-center space-x-2 px-4 py-2 border rounded-md hover:bg-gray-50">
                            <ExternalLink className="h-4 w-4" />
                            <span>Share</span>
                          </button>
                        </>
                      ) : (
                        <button className="px-4 py-2 bg-[#0056D2] text-white rounded-md hover:bg-blue-700">
                          Continue Learning
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <InfoItem label="Issue Date" value={cert.issueDate} />
                    <InfoItem label="Credential ID" value={cert.credentialID} />
                    <InfoItem label="Learning Hours" value={`${cert.hours} hours`} />
                  </div>
                 {cert.status === "in-progress" && typeof cert.progress === "number" ? (
  <ProgressBar label="Progress" percent={cert.progress} color="#0056D2" />
) : cert.status === "completed" && typeof cert.grade === "number" ? (
  <ProgressBar label="Final Grade" percent={cert.grade} color="green" />
) : null}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }: any) => (
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="text-gray-600">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  </div>
);

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-sm text-gray-500">{label}</p>
    <p className="font-medium">{value}</p>
  </div>
);

const ProgressBar = ({ label, percent, color }: { label: string; percent: number; color: string }) => (
  <div className="mt-4">
    <div className="flex justify-between text-sm mb-1">
      <span>{label}</span>
      <span>{percent}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full bg-[${color}]`}
        style={{ width: `${percent}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

export default Index;