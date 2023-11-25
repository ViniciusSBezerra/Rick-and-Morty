export const searchCharacterByName = async (name: string) => {
  console.log(name);

  if (name.length) return null;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );

  const res = await response.json();
  console.log("res", res);
};
