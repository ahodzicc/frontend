export default function ProjectCard({
  title,
  description,
  tags = [],
  liveUrl,
  codeUrl,
}) {
  return (
    <article className="projectCard">
      <div className="projectTop">
        <h3 className="projectTitle">{title}</h3>
        <div className="tagRow">
          {tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <p className="projectDesc">{description}</p>

      <div className="projectLinks">
        {liveUrl && (
          <a
            className="projectLink"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live →
          </a>
        )}
        {codeUrl && (
          <a
            className="projectLink"
            href={codeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Code →
          </a>
        )}
      </div>
    </article>
  );
}
