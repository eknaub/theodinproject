import "./styles/cvEdit.css";

interface CVEditWrapperProps {
  children: React.ReactNode;
}

export function CVEditWrapper(props: CVEditWrapperProps) {
  return <div className="cvEditWrapper">{props.children}</div>;
}
