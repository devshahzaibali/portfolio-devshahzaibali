import Script from "next/script";

export default function PersonSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Shahzaib Ali",
        url: "https://devshahzaibali.online",
        sameAs: [
            "https://github.com/devshahzaibali",
            "https://x.com/devshahzaibali?t=aCugTK5EUSgtmPyAkqBn2Q&s=08",
            "https://www.instagram.com/devshahzaibali?utm_source=qr&igsh=MTc3MjB1NGlvc3ltcA==",
            "https://www.linkedin.com/in/devshahzaib-ali-b75ba7308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        ],
        jobTitle: "Full Stack Developer",
        worksFor: {
            "@type": "Organization",
            name: "Freelance",
        },
        image: "https://devshahzaibali.online/assets/profile.jpg",
    };

    return ( <
        Script id = "person-schema"
        type = "application/ld+json"
        dangerouslySetInnerHTML = {
            { __html: JSON.stringify(schema) }
        }
        />
    );
}