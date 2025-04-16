interface CVEditWrapperProps {
  children: React.ReactNode;
}

export function CVEditWrapper(props: CVEditWrapperProps) {
  return (
    <div>
      <h1>CV Edit</h1>
      {props.children}
    </div>
  );
}
