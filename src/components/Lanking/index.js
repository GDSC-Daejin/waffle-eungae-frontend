import React, { useEffect, useState } from "react";
import { getViewCount } from "../../apis";
import { Lank, LankingWrapper, View, Title } from "./style";

const Lanking = () => {
  const [lankData, setLankData] = useState([]);
  const setViewCount = async () => {
    const res = await getViewCount();
    const arr = [];
    res.data.content.forEach((post) => {
      if (arr.length <= 10) {
        arr.push(post);
        console.log(post);
      }
    });
    setLankData(arr);
  };

  useEffect(() => {
    setViewCount();
  }, []);

  return (
    <LankingWrapper>
      <div className="letter">실시간 랭킹</div>
      {lankData !== [] ? (
        lankData.map((post, index) => {
          return (
            <View key={index}>
              <Lank>{index + 1}</Lank>
              <Title>{post.title}</Title>
            </View>
          );
        })
      ) : (
        <View></View>
      )}
    </LankingWrapper>
  );
};

export default Lanking;
