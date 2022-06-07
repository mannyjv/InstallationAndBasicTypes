import React from 'react';

export default function ArgonautesList(props) {
  const { listOfArgonautes } = props;
  const firstColList = listOfArgonautes.filter((name) => name.id <= 15);
  const secondColList = listOfArgonautes.filter((name) => {
    if (name.id >= 16 && name.id <= 31) return name;
  });
  const thirdColList = listOfArgonautes.filter((name) => name.id >= 32);

  return (
    <section className="member-list">
      <div className="col">
        {firstColList.map((argonaute) => {
          return (
            <div className="member-item" key={argonaute.id}>
              {argonaute.name}
            </div>
          );
        })}
      </div>
      <div className="col">
        {secondColList.map((argonaute) => {
          return (
            <div className="member-item" key={argonaute.id}>
              {argonaute.name}
            </div>
          );
        })}
      </div>
      <div className="col">
        {thirdColList.map((argonaute) => {
          return (
            <div className="member-item" key={argonaute.id}>
              {argonaute.name}
            </div>
          );
        })}
      </div>
    </section>
  );
}
