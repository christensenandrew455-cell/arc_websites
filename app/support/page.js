import SupportForm from "./SupportForm";

export default async function SupportPage({ searchParams }) {
  const { topic = "" } = await searchParams;
  return <SupportForm initialTopic={topic} />;
}
