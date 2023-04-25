export const formatDate = function (date: string) {
  console.log(date);
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
  });
};
