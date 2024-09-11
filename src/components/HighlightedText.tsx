type HighlightedTextProps = {
  text: string;
  highlight: string;
};

function HighlightedText({ text, highlight }: HighlightedTextProps) {
  // Split the text into parts based on the highlight
  const parts = text.split(new RegExp(`(${highlight})`, "i")); // Regex i flag stands for case-insensitive match
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={index} className="bg-yellow-200">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
}

export default HighlightedText;
