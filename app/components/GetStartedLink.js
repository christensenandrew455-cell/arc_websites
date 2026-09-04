import { clientCenterSignupUrl } from "../productLinks";

export default function GetStartedLink({ children = "Get Started", className = "", ...props }) {
  return <a href={clientCenterSignupUrl} className={className} {...props}>{children}</a>;
}
