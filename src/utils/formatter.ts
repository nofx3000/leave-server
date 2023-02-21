interface MapInter<T> {
  [propName: number]: T;
}

interface TInter {
  id: number;
  [propName: string]: any;
}

export const listToMap = <T extends TInter>(list: T[]): MapInter<T> => {
  return list.reduce((prev: MapInter<T>, cur) => {
    prev[cur.id] = cur;
    return prev;
  }, {});
};
