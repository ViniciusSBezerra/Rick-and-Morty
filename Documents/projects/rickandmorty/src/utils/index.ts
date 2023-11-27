export const searchCharacterByName = async (name: string) => {
  if (name.length) return null;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );

  return response;
};
