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