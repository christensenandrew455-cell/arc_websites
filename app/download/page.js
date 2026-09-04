import { redirect } from "next/navigation";
import { clientCenterSignupUrl } from "../productLinks";

export default function DownloadPage() {
  redirect(clientCenterSignupUrl);
}
