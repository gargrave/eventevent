export const objectsByOwner = (objects, owner) =>
  objects.filter((o) => o.owner === owner.uid);
