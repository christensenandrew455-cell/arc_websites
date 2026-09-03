export async function POST() {
  return Response.json(
    {
      success: false,
      error: "Use Support.",
      supportPath: "/support",
    },
    { status: 410 },
  );
}
