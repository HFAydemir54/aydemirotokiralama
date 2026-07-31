/**
 * JSON-LD structured data.
 *
 * Next dokümanının önerdiği yöntem: next/script DEĞİL, native <script>.
 * next/script varsayılan olarak client tarafında enjekte eder; structured
 * data'nın ilk HTML yanıtında bulunması gerekir.
 * `<` karakteri XSS'e karşı kaçırılır (docs/01-app/02-guides/json-ld.md).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
