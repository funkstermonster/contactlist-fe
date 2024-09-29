import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const apiUrl = "http://localhost:8080/api/contacts";
    const formData = new FormData();

    const contactData = await request.json();

    formData.append("contact", JSON.stringify(contactData));

    const imageFile = contactData.image;
    if (imageFile) {
        formData.append("image", imageFile);
    }

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const savedContact = await response.json();
        return new Response(JSON.stringify(savedContact), { status: 201 });
    } catch (error: any) {
        return new Response(error.message, { status: 500 });
    }
}
