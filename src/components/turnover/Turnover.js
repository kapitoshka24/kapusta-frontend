<<<<<<< HEAD
import React from 'react';
import styles from './Turnover.module.scss';

export default function Turnover() {
  const turnoverArr = [23000, 300];

  return (
    <div className={styles.turnover}>
      <ul className={styles.turnover__list}>
        <li className={styles.turnover__item}>
          Расходы
          <span className={`${styles.turnover__value} ${styles.expense_color}`}>
            - {turnoverArr[0]} грн.
          </span>
        </li>
        <div className={styles.verticalLine}></div>
        <li className={styles.turnover__item}>
          Доходы
          <span className={`${styles.turnover__value} ${styles.income_color}`}>
            + {turnoverArr[1]} грн.
          </span>
        </li>
      </ul>
    </div>
  );
}
||||||| parent of 124e49d (Test commit before rebasing)
=======
import React from "react";
import styles from "./Turnover.module.scss";

let turnoverArr = [
	{ id: 1, name: "Расходы", value: 18000 },
	{ id: 2, name: "Доходы", value: 45000 }
]


export default function Turnover(){
	return (
		<>
			<section className={styles.turnover}>
				<ul className={styles.turnover__list}>
				{turnoverArr.map((turnoverItem) => {
					let adoptedValue;
					if (turnoverItem.name === "Расходы") {
						adoptedValue = "- "+String(turnoverItem.value.toFixed(2)) + " грн.";
					}
					if (turnoverItem.name === "Доходы") {
						adoptedValue = "+ "+String(turnoverItem.value) + " грн.";
					}
					
					<li key={turnoverItem.id} className={styles.turnover__item}>{turnoverItem.name} :<span className={styles.turnover_value}>{adoptedValue}</span></li>
				})}
	
			</ul>
			</section>
			
		</>
	)
}
>>>>>>> 124e49d (Test commit before rebasing)
