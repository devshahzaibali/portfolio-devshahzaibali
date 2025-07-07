import Script from "next/script";

export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahzaib Ali",
    url: "https://devshahzaibali.online",
    sameAs: [
      "https://github.com/dev-shahzaib",
      "https://linkedin.com/in/shahzaibali",
      "https://twitter.com/devshahzaibali",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    image: "https://devshahzaibali.online/assets/profile.jpg",
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
