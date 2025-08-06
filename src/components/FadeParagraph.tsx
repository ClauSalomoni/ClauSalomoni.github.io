import FadeText from "./FadeText";

export default function FadeParagraph({ children }: { children: React.ReactNode }) {
  return (
    <FadeText as="p" className="text-lg md:text-xl leading-relaxed">
      {children}
    </FadeText>
  );
}