// {
//   /* <div>
//   <img src="" alt="" width="480" />
//   <h2></h2>
//   <p>
//     Автор: <a href=""></a>
//   </p>
//   <p>Цена: кредитов</p>
//   <p>Доступность: заканчивается или есть в наличии}</p>
//   <button type="button">Добавить в корзину</button>
// </div>; */
// }
// const data = {
//   id: 'id-1',
//   url: 'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 500,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

import { GlobalStyle } from './GlobalStyle';
import { PaintingList } from './PaintingList';
import { Section } from './Section';
import paintings from './paintings.json';

export const App = () => {
  return (
    <>
      <Section title="Топ тижня">
        <PaintingList paintings={paintings} />
      </Section>
      <Section title="Найкраще місяця" />

      <GlobalStyle />
    </>
  );
};
