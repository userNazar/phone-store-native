import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';


export default function SliderCom({ sliders, SliderElement }: { sliders: any, SliderElement: any }) {
  const flatListRef = useRef<FlatList<any>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidersIndex, setCurrentSlidersIndex] = useState([...sliders])

  useEffect(() => {
    setCurrentSlidersIndex([...sliders])
  }, [sliders])

  useEffect(() => {
    const autoScroll = setInterval(() => {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: (currentIndex + 1) % sliders.length,
      });
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliders.length);
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [currentIndex, sliders]);

  const onMomentumScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const viewSize = event.nativeEvent.layoutMeasurement;

    const newIndex = Math.floor(contentOffset.x / viewSize.width);
    setCurrentIndex(newIndex);
  };


  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        style={styles.slider}
        data={sliders}
        renderItem={({ item }) => <SliderElement id={item.id} img={item.img} description={item.description} percent={item.percent} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
      <View style={styles.sliderIndexes}>
        {
          slidersIndex.map(el =>
            <View key={el.id.toString()} style={{ ...styles.sliderIndex, backgroundColor: currentIndex === el.id ? 'black' : 'white' }}></View>
          )
        }
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  slider: {
    width: 350, height: 120
  },
  sliderIndexes: {
    flexDirection: 'row',
    marginTop: -10
  },
  sliderIndex: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 100,
    height: 5,
    width: 5,
    marginHorizontal: 5
  }
})