export default function formatCleanDate(dateString: string) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  const weekday = new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
  })
    .format(date)
    .replace("-feira", "");

  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);

  return `${capitalize(weekday)} ${day} de ${monthName}`;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
