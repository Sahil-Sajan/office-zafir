import StatusHero from "@/components/Front-Pages/Status/Status-hero";
import StatusBoard from "@/components/Front-Pages/Status/Status-board";
import StatusIncidents from "@/components/Front-Pages/Status/Status-incidents";

export function StatusView() {
  return (
    <div>
      <StatusHero />
      <StatusBoard />
      <StatusIncidents />
    </div>
  );
}
