import Highlight from "../Highlight";

export default function HighlightText({ text }: { text: string }) {
  const p = text.split(/(\[.*?\])/);

  return (
    <>
      {p.map((parte, index) => {
        if (parte.startsWith("[") && parte.endsWith("]")) {
          const texto = parte.substring(1, parte.length - 1);
          return <Highlight key={index}>{texto}</Highlight>;
        } else {
          return parte;
        }
      })}
    </>
  );
}
