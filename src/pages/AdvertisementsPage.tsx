import React from "react";

import { AdvertisementsList } from "@features/AdvertisementsList";
import { Pagination } from "@widgets/pagination";
import { advertisements } from '../data';


interface Props {

}

const AdvertisementsPage: React.FC<Props> = () => {
  let total = advertisements.length;
  let defaultPageSize = 10;
  let defaultCurrent = 1;

  return (
    <main>
      <h1>Мои объявления</h1>
      <AdvertisementsList advertisements={advertisements}/>
      <Pagination 
        total={total}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={defaultPageSize}
        defaultCurrent={defaultCurrent}
      />
    </main>

  );
}

export default AdvertisementsPage;