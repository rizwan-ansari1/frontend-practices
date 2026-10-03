interface PanelProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}
function Panel({ title, subtitle, children }: PanelProps) {
  return (
    <section className="panel">
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      <div className="panel-body">{children}</div>
    </section>
  );
}

export default Panel;
