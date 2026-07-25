export async function POST() {
  return Response.json(
    {
      success: false,
      error: "The old contact form has been retired. Use the ARK Client Center support page.",
      supportPath: "/support",
    },
    { status: 410 },
  );
}
