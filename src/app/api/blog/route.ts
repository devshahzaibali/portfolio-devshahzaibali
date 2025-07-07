import { NextRequest, NextResponse } from "next/server";
import { getPosts, addPost, updatePost, deletePost } from "@/lib/blogStore";

export async function GET() {
  return NextResponse.json(getPosts());
}

export async function POST(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const post = await req.json();
  addPost(post);
  return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id, ...newData } = await req.json();
  updatePost(id, newData);
  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const password = req.headers.get("x-admin-password");
  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await req.json();
  deletePost(id);
  return NextResponse.json({ success: true });
}
