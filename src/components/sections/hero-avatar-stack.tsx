import heroCollageMain from "../../../assets/imox-hero-team-table.webp";
import heroCollageSolo from "../../../assets/s1/magnific_a-man-with-dark-hair-and-_8a1hCHDIrU.webp";
import heroCollageTeam from "../../../assets/s1/magnific_bright-cheerful-lifestyle_SyzJRgOUb8.webp";

export function HeroAvatarStack() {
  const avatars = [
    { src: heroCollageMain, alt: "Team using iMOX" },
    { src: heroCollageTeam, alt: "Group coordinating through iMOX" },
    { src: heroCollageSolo, alt: "Person using iMOX on mobile" },
  ];

  return (
    <div className="flex -space-x-3" aria-label="iMOX groups">
      {avatars.map((avatar, index) => (
        <img
          key={avatar.alt}
          src={avatar.src}
          alt={avatar.alt}
          loading="lazy"
          width={44}
          height={44}
          className="size-11 rounded-full border-2 border-background object-cover shadow-sm"
          style={{ objectPosition: index === 0 ? "50% 42%" : index === 1 ? "48% 42%" : "50% 30%" }}
        />
      ))}
    </div>
  );
}
