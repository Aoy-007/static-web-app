import { useEffect } from 'react';

export const ListPage = () => {
  useEffect(() => {
    (async function () {
      const res = await (await fetch(`/api/list`)).json();
      console.log('>>> list res', res);
    })();
  }, []);
  return (
    <>
      <h1>ListPage</h1>
      <p>This is the list page.</p>
    </>
  );
};
