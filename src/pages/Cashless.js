import "./Cashless.css";

const Cashless = () => {
  return (
    <div className="content">
      <h1>Безнал</h1>
      <h2>Магазин "Соседи"</h2>
      <p>
        Заключен договор с магазином "Соседи". При получении заказа "Соседи
        безнал"....водитель приезжает по месту назначения, забирает пассажиров ,
        привозит по месту высадки, которое указано в терминале- делаем скрин, с
        пассажиров деньги не берем, отправляем скрин в группу БЕЗНАЛ.
      </p>
      <p className="tip warning v3-warning">
        Возврат денег за поездку водителя от фирмы в 100% объеме.
      </p>
      <h2>Институт земледелия</h2>
      <p>
        Заключен договор с "ИНСТИТУТОМ ЗЕМЛЕДЕЛИЯ". При получении заказа
        "ИНСТИТУТ безнал"....водитель приезжает по месту назначения, забирает
        пассажиров , привозит по месту высадки, которое указано в терминале-
        делаем скрин, с пассажиров деньги не берем, отправляем скрин в группу
        БЕЗНАЛ.
      </p>
      <p className="tip warning v3-warning">
        Возврат денег за поездку водителя от фирмы в 100% объеме.
      </p>
      <h2>Терминал</h2>
      <p>
        Оплата производится пассажиром через терминал (гандлярок, mpos). Делаем
        скрин оплаты- отправляем скрин в группы "безнал".
      </p>
      <p className="tip warning v3-warning">
        Возврат денег за поездку осуществляется в 97,3%, т.к. 2,7 % банк
        высчитывает комиссию
      </p>
      <h2>Приложение</h2>
      <p>
        Оплата производиться пассажиром через приложение привязав карту к
        приложению. Скрин НЕ ДЕЛАЕМ. Данная сумма отображается в личном кабинете
        водителя.
      </p>
      <p className="tip warning v3-warning">
        Возврат денег за поездку осуществляется в 97%, т.к. 3 % банк высчитывает
        комиссию.
      </p>
    </div>
  );
};
export default Cashless;
