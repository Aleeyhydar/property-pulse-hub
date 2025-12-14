import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
  return (
    <div className="group text-center">
      {/* Avatar */}
      <div className="relative mx-auto w-32 h-32 mb-4 rounded-full overflow-hidden bg-primary/10">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl font-bold text-primary">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
      <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
      <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
        {member.bio}
      </p>
    </div>
  );
};
