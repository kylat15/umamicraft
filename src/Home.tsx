import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { FontFamily, Color } from "../GlobalStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <Image
        style={styles.homeChild}
        source={require("../assets/rectangle-60.png")}
      />
      <View style={[styles.searchBar, styles.searchLayout]}>
        <View style={[styles.searchBarChild, styles.childBorder]} />
        <Text style={styles.searchRecipes}>Search recipes</Text>
        <Image
          style={[styles.iconSearch, styles.iconLayout]}
          source={require("../assets/-icon-search.png")}
        />
      </View>
      <Text style={styles.carlo}>Carlo!</Text>
      <Text style={styles.welcome}>Welcome,</Text>
      <View style={[styles.searchByIngredients, styles.ingredientsLayout]}>
        <Text style={[styles.searchIngredients, styles.searchtTypo]}>
          Search by Ingredients
        </Text>
        <Pressable
          style={styles.viewAll}
          onPress={() => navigation.navigate("ViewAllIngredients")}
        >
          <Text style={[styles.viewAll1, styles.egg1Typo]}>View all</Text>
        </Pressable>
        <View
          style={[styles.rowOfIngredientsWrapper, styles.ingredientsLayout]}
        >
          <View style={styles.rowOfIngredients}>
            <View style={[styles.steak, styles.eggLayout]}>
              <Image
                style={[styles.steakChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-11.png")}
              />
              <Image
                style={[styles.emojiCutOfMeat, styles.emojiLayout]}
                source={require("../assets/-emoji-cut-of-meat.png")}
              />
              <Text style={[styles.steak1, styles.egg1Typo]}>Pork</Text>
            </View>
            <View style={[styles.onion, styles.eggLayout]}>
              <Image
                style={[styles.steakChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-10.png")}
              />
              <Image
                style={[styles.emojiOnionIcon, styles.iconLayout]}
                source={require("../assets/-emoji-onion.png")}
              />
              <Text style={[styles.onion1, styles.egg1Typo]}>Onion</Text>
            </View>
            <View style={[styles.garlic, styles.eggLayout]}>
              <Image
                style={[styles.steakChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-9.png")}
              />
              <Image
                style={[styles.iconGarlic, styles.iconLayout]}
                source={require("../assets/-icon-garlic.png")}
              />
              <Text style={[styles.garlic1, styles.egg1Typo]}>Garlic</Text>
            </View>
            <View style={[styles.egg, styles.eggLayout]}>
              <Image
                style={[styles.steakChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-8.png")}
              />
              <Image
                style={[styles.emojiEggIcon, styles.emojiLayout]}
                source={require("../assets/-emoji-egg.png")}
              />
              <Text style={[styles.egg1, styles.egg1Typo]}>Egg</Text>
            </View>
            <View style={[styles.cheese, styles.cheeseChildPosition]}>
              <Image
                style={[styles.cheeseChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-81.png")}
              />
              <Text style={[styles.name1, styles.nameTypo]}>Cheese</Text>
              <Image
                style={[styles.emojiCheeseWedge, styles.iconLayout]}
                source={require("../assets/-emoji-cheese-wedge.png")}
              />
            </View>
            <View style={[styles.butter, styles.cheeseChildPosition]}>
              <Image
                style={[styles.cheeseChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-111.png")}
              />
              <Text style={[styles.name4, styles.nameTypo]}>Butter</Text>
              <Image
                style={[styles.iconButter, styles.iconLayout]}
                source={require("../assets/-icon-butter.png")}
              />
            </View>
            <View style={[styles.bread, styles.cheeseChildPosition]}>
              <Image
                style={[styles.cheeseChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-91.png")}
              />
              <Text style={[styles.name2, styles.nameTypo]}>Bread</Text>
              <Image
                style={[styles.emojiBreadIcon, styles.iconLayout]}
                source={require("../assets/-emoji-bread.png")}
              />
            </View>
            <View style={[styles.milk, styles.cheeseChildPosition]}>
              <Image
                style={[styles.cheeseChild, styles.cheeseChildPosition]}
                source={require("../assets/ellipse-101.png")}
              />
              <Text style={styles.name3}>Milk</Text>
              <Image
                style={[styles.emojiGlassOfMilk, styles.iconLayout]}
                source={require("../assets/-emoji-glass-of-milk.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.searchByCategory, styles.cardPosition]}>
        <View style={[styles.shoyu, styles.shoyuLayout1]}>
          <View style={[styles.shoyuChild, styles.rectangleLayout]} />
          <Text style={[styles.shoyu1, styles.shoyuTypo]}>Shoyu</Text>
          <Text style={[styles.soySauce, styles.iconPosition2]}>Soy Sauce</Text>
          <Image
            style={styles.shoyuIcon}
            source={require("../assets/shoyu.png")}
          />
        </View>
        <View style={[styles.miso, styles.shoyuLayout1]}>
          <View style={[styles.shoyuChild, styles.rectangleLayout]} />
          <Text style={[styles.shoyu2, styles.shoyuLayout]}>Miso</Text>
          <Text
            style={[styles.fermentedSoybeanPaste, styles.kcalCaloriesPosition]}
          >
            Fermented Soybean Paste
          </Text>
          <Image
            style={[styles.misoIcon, styles.iconPosition1]}
            source={require("../assets/miso.png")}
          />
        </View>
        <View style={[styles.shio, styles.shoyuLayout1]}>
          <View style={[styles.shoyuChild, styles.rectangleLayout]} />
          <Text style={[styles.shoyu3, styles.shoyu3Position]}>Shio</Text>
          <Text style={[styles.soySauce, styles.iconPosition2]}>Sea Salt</Text>
          <Image
            style={styles.shioIcon}
            source={require("../assets/shio.png")}
          />
        </View>
        <View style={[styles.tonkotsu, styles.shoyuLayout1]}>
          <View style={[styles.shoyuChild, styles.rectangleLayout]} />
          <Text style={[styles.shoyu4, styles.shoyuTypo]}>Tonkotsu</Text>
          <Text style={[styles.soySauce, styles.iconPosition2]}>Pork Bone</Text>
          <Image
            style={[styles.tonkotsuIcon, styles.iconPosition1]}
            source={require("../assets/tonkotsu.png")}
          />
        </View>
        <Text style={[styles.searcht, styles.searchtTypo]}>
          Search by Category
        </Text>
      </View>
      <Image
        style={[styles.shapesIcon, styles.iconPosition2]}
        source={require("../assets/shapes.png")}
      />
      <View style={[styles.daysParent, styles.iconPosition2]}>
        <View style={[styles.days, styles.daysLayout]}>
          <View style={[styles.rectangle, styles.daysLayout]} />
          <Text style={[styles.kcalCalories, styles.gFatsLayout]}>
            <Text style={styles.kcal}>{`23,724Kcal
`}</Text>
            <Text style={styles.calories}>Calories</Text>
          </Text>
          <Image
            style={styles.twoYellowStars}
            source={require("../assets/two-yellow-stars.png")}
          />
        </View>
        <View style={[styles.days1, styles.daysLayout]}>
          <View style={[styles.rectangle1, styles.daysLayout]} />
          <Text style={[styles.gFats, styles.gFatsLayout]}>
            <Text style={styles.g}>{`7,116.2g
`}</Text>
            <Text style={styles.calories}>Fats</Text>
          </Text>
          <Image
            style={styles.waterDropIcon}
            source={require("../assets/water-drop.png")}
          />
        </View>
        <View style={[styles.allTime, styles.allTimeShadowBox]}>
          <View style={[styles.rectangle2, styles.daysLayout]} />
          <Text style={[styles.gCarbohydrates, styles.gFatsLayout]}>
            <Text style={styles.g}>{`2,964.2g
`}</Text>
            <Text style={styles.calories}>Carbohydrates</Text>
          </Text>
          <Image
            style={[styles.pinkPeach, styles.pinkLayout]}
            source={require("../assets/pink-peach.png")}
          />
        </View>
        <View style={[styles.medianWeight, styles.allTimeShadowBox]}>
          <View style={[styles.rectangle3, styles.daysLayout]} />
          <Text style={[styles.gProteins, styles.gFatsLayout]}>
            <Text style={styles.g}>{`1,186.2g
`}</Text>
            <Text style={styles.calories}>Proteins</Text>
          </Text>
          <Image
            style={[styles.pinkSalmonSteak, styles.pinkLayout]}
            source={require("../assets/pink-salmon-steak.png")}
          />
        </View>
        <Image
          style={styles.groupChild}
          source={require("../assets/group-21.png")}
        />
      </View>
      <View style={[styles.card, styles.cardPosition]}>
        <View style={[styles.cardChild, styles.childBorder]} />
        <Text
          style={[styles.subtitle, styles.titlePosition]}
        >{`Discover personalized recipes tailored to your taste,
health goals, and allergies, all at your fingertips!`}</Text>
        <Text style={[styles.title, styles.titlePosition]}>{`Where Ingredients
Meet Inspiration!`}</Text>
        <Image
          style={styles.topViewOfJapaneseNoodleSoIcon}
          source={require("../assets/13206324topviewofjapanesenoodlesouprameninwhitebowlwithnoodlesmeatbrothslicedroastedporknarutomakiremovebgpreview-1.png")}
        />
      </View>
      <Image
        style={[styles.misoRamenAsianNoodlesWithIcon, styles.iconPosition2]}
        source={require("../assets/12275444misoramenasiannoodleswitheggenokiandpakchoicabbageinbowlonwhitemarblebackgroundremovebgpreview.png")}
      />
      <Image
        style={[styles.mushroomAndEggRamenJapanRIcon, styles.iconPosition2]}
        source={require("../assets/12666306mushroomandeggramenjapanremovebgpreview.png")}
      />
      <View style={styles.navigationTab}>
        <View style={[styles.navBox, styles.navBoxPosition]} />
        <Pressable
          style={styles.more}
          onPress={() => navigation.navigate("More")}
        >
          <Image
            style={[styles.moreIcon, styles.navBoxPosition]}
            source={require("../assets/more-icon.png")}
          />
          <Text style={[styles.more1, styles.more1Typo]}>{`More
`}</Text>
        </Pressable>
        <Pressable
          style={[styles.pantry, styles.pantryPosition]}
          onPress={() => navigation.navigate("Pantry")}
        >
          <Image
            style={[styles.mealPlannerIcon, styles.iconPosition]}
            source={require("../assets/meal-planner-icon.png")}
          />
          <Text style={[styles.pantry1, styles.more1Typo]}>Pantry</Text>
        </Pressable>
        <View style={[styles.profile, styles.pantryPosition]}>
          <Image
            style={[styles.customerProfileIcon, styles.iconPosition]}
            source={require("../assets/customer-profile-icon.png")}
          />
          <Text style={[styles.profile1, styles.more1Typo]}>Profile</Text>
        </View>
        <Pressable
          style={[styles.recipes, styles.pantryPosition]}
          onPress={() => navigation.navigate("Recipes")}
        >
          <Image
            style={[styles.recipeIcon, styles.iconPosition]}
            source={require("../assets/recipe-icon.png")}
          />
          <Text style={[styles.recipes1, styles.more1Typo]}>Recipes</Text>
        </Pressable>
        <View style={styles.dashboard}>
          <Image
            style={[styles.dashboardIcon, styles.iconPosition]}
            source={require("../assets/dashboard-icon.png")}
          />
          <Text style={[styles.pantry1, styles.more1Typo]}>Home</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 44,
    width: 374,
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  ingredientsLayout: {
    width: 377,
    position: "absolute",
  },
  searchtTypo: {
    fontSize: 29,
    color: Color.colorMaroon,
    fontFamily: FontFamily.archivoBlackRegular,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  egg1Typo: {
    height: 12,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.basicRegular,
    fontSize: 15,
  },
  eggLayout: {
    height: 90,
    top: 2,
    width: 76,
    position: "absolute",
  },
  cheeseChildPosition: {
    width: 76,
    top: 0,
    position: "absolute",
  },
  emojiLayout: {
    height: "49.39%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  nameTypo: {
    height: 13,
    top: 79,
    textAlign: "center",
    color: Color.colorGray,
    fontFamily: FontFamily.basicRegular,
    fontSize: 15,
    position: "absolute",
  },
  cardPosition: {
    left: 29,
    position: "absolute",
  },
  shoyuLayout1: {
    height: 87,
    width: 87,
    position: "absolute",
  },
  rectangleLayout: {
    borderRadius: 60,
    left: 0,
  },
  shoyuTypo: {
    height: 7,
    //fontFamily: FontFamily.candal,
    //fontSize: FontSize.size_xs,
    top: 63,
    textAlign: "center",
    color: Color.colorMaroon,
    position: "absolute",
  },
  iconPosition2: {
    display: "none",
    position: "absolute",
  },
  shoyuLayout: {
    height: 8,
    width: 42,
    //fontFamily: FontFamily.candal,
    //fontSize: FontSize.size_xs,
    top: 63,
    color: Color.colorMaroon,
    position: "absolute",
  },
  kcalCaloriesPosition: {
    left: 4,
    textAlign: "center",
  },
  iconPosition1: {
    top: 7,
    position: "absolute",
  },
  shoyu3Position: {
    left: 23,
    textAlign: "center",
  },
  daysLayout: {
    height: 150,
    width: 148,
    top: 0,
    position: "absolute",
  },
  gFatsLayout: {
    lineHeight: 20,
    color: Color.colorWhite,
    position: "absolute",
  },
  allTimeShadowBox: {
    top: 169,
    height: 150,
    width: 148,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  pinkLayout: {
    width: 80,
    height: 38,
    top: 23,
    position: "absolute",
  },
  titlePosition: {
    left: 19,
    textAlign: "left",
    position: "absolute",
  },
  navBoxPosition: {
    left: "0%",
    width: "100%",
  },
  more1Typo: {
    //fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.didactGothicRegular,
    textAlign: "center",
    //color: Color.colorDimgray,
    position: "absolute",
  },
  pantryPosition: {
    bottom: "26.26%",
    position: "absolute",
  },
  iconPosition: {
    top: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  homeChild: {
   // borderRadius: Border.br_21xl,
    width: 430,
    height: 195,
    left: 0,
    top: 0,
    position: "absolute",
  },
  searchBarChild: {
   // borderRadius: Border.br_3xl,
    //borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
    height: 44,
    width: 374,
    top: 0,
  },
  searchRecipes: {
    top: 11,
    left: 50,
    //color: Color.colorWhitesmoke,
    width: 241,
    height: 27,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    //fontSize: FontSize.size_mid,
    position: "absolute",
  },
  iconSearch: {
    height: "64.77%",
    width: "7.59%",
    top: "17.73%",
    right: "89.31%",
    bottom: "17.5%",
    left: "3.1%",
    position: "absolute",
  },
  searchBar: {
    top: 113,
    left: 28,
    position: "absolute",
  },
  carlo: {
    top: 58,
    width: 220,
    color: Color.colorWhite,
    fontFamily: FontFamily.archivoBlackRegular,
    //fontSize: FontSize.size_6xl,
    textAlign: "left",
    left: 28,
    position: "absolute",
  },
  welcome: {
    marginLeft: -187,
    top: 38,
    left: "50%",
    //fontSize: FontSize.size_mini,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.basicRegular,
    position: "absolute",
  },
  searchIngredients: {
    left: 1,
    width: 265,
    height: 25,
    color: Color.colorMaroon,
  },
  viewAll1: {
   // textDecoration: "underline",
    width: 64,
  },
  viewAll: {
    left: 303,
    top: 1,
    position: "absolute",
  },
  steakChild: {
    height: 74,
    left: 0,
  },
  emojiCutOfMeat: {
    width: "60.05%",
    top: "17.77%",
    right: "19.97%",
    bottom: "32.85%",
    left: "19.97%",
  },
  steak1: {
    left: 18,
    width: 40,
    top: 77,
    position: "absolute",
  },
  steak: {
    left: 293,
  },
  emojiOnionIcon: {
    height: "59.11%",
    width: "66.27%",
    top: "13.41%",
    right: "15.34%",
    bottom: "27.49%",
    left: "18.39%",
    position: "absolute",
  },
  onion1: {
    width: 44,
    left: 16,
    top: 77,
    position: "absolute",
  },
  onion: {
    left: 194,
  },
  iconGarlic: {
    height: "56.09%",
    width: "55.03%",
    top: "10.95%",
    right: "21.69%",
    bottom: "32.96%",
    left: "23.28%",
    position: "absolute",
  },
  garlic1: {
    width: 50,
    left: 14,
    top: 77,
    position: "absolute",
  },
  garlic: {
    left: 97,
  },
  emojiEggIcon: {
    width: "44.05%",
    top: "15.08%",
    right: "27.65%",
    bottom: "35.53%",
    left: "28.31%",
  },
  egg1: {
    top: 78,
    left: 20,
    width: 35,
    position: "absolute",
  },
  egg: {
    left: 0,
  },
  cheeseChild: {
    height: 75,
    left: 0,
  },
  name1: {
    left: 9,
    width: 53,
  },
  emojiCheeseWedge: {
    height: "36.81%",
    width: "54.99%",
    top: "23.3%",
    right: "23.36%",
    bottom: "39.89%",
    left: "21.65%",
    position: "absolute",
  },
  cheese: {
    left: 384,
    height: 91,
  },
  name4: {
    left: 6,
    width: 69,
  },
  iconButter: {
    height: "21.87%",
    width: "74.93%",
    top: "32.86%",
    right: "15.09%",
    bottom: "45.27%",
    left: "9.97%",
    position: "absolute",
  },
  butter: {
    left: 679,
    height: 91,
  },
  name2: {
    width: 51,
    left: 14,
  },
  emojiBreadIcon: {
    height: "39.56%",
    width: "65.09%",
    top: "21.87%",
    right: "18.24%",
    bottom: "38.57%",
    left: "16.67%",
    position: "absolute",
  },
  bread: {
    left: 482,
    height: 91,
  },
  name3: {
    width: 45,
    left: 15,
    height: 13,
    top: 79,
    textAlign: "center",
    //color: Color.colorDimgray,
    fontFamily: FontFamily.basicRegular,
    //fontSize: FontSize.size_mid,
    position: "absolute",
  },
  emojiGlassOfMilk: {
    height: "53.41%",
    width: "43.96%",
    top: "16.48%",
    right: "29.4%",
    bottom: "30.11%",
    left: "26.64%",
    position: "absolute",
  },
  milk: {
    left: 580,
    height: 91,
  },
  rowOfIngredients: {
    width: 755,
    height: 91,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rowOfIngredientsWrapper: {
    top: 39,
    height: 91,
    left: 0,
  },
  searchByIngredients: {
    top: 228,
    height: 130,
    left: 28,
  },
  shoyuChild: {
   // backgroundColor: Color.colorNavajowhite_100,
    height: 87,
    width: 87,
    position: "absolute",
    top: 0,
  },
  shoyu1: {
    left: 17,
    width: 53,
  },
  soySauce: {
    height: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    top: 71,
    display: "none",
   // fontSize: FontSize.size_xs,
    left: 22,
    textAlign: "center",
    width: 40,
  },
  shoyuIcon: {
    height: 54,
    width: 59,
    top: 9,
    left: 15,
    position: "absolute",
  },
  shoyu: {
    top: 41,
    width: 87,
    left: 0,
  },
  shoyu2: {
    left: 22,
    textAlign: "center",
  },
  fermentedSoybeanPaste: {
    width: 79,
    display: "none",
    position: "absolute",
    height: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.beVietnam,
    top: 71,
    //fontSize: FontSize.size_xs,
  },
  misoIcon: {
    width: 57,
    height: 57,
    left: 14,
  },
  miso: {
    left: 193,
    top: 41,
    width: 87,
  },
  shoyu3: {
    height: 8,
    width: 42,
    //fontFamily: FontFamily.candal,
    //fontSize: FontSize.size_xs,
    top: 63,
    color: Color.colorMaroon,
    position: "absolute",
  },
  shioIcon: {
    height: 55,
    width: 59,
    top: 9,
    left: 14,
    position: "absolute",
  },
  shio: {
    left: 96,
    top: 41,
    width: 87,
  },
  shoyu4: {
    left: 13,
    width: 61,
  },
  tonkotsuIcon: {
    width: 56,
    height: 58,
    left: 16,
  },
  tonkotsu: {
    left: 289,
    top: 41,
    width: 87,
  },
  searcht: {
    width: 226,
    height: 28,
    color: Color.colorMaroon,
    left: 0,
  },
  searchByCategory: {
    top: 411,
    width: 376,
    height: 128,
  },
  shapesIcon: {
    height: "76.78%",
    width: "176%",
    top: "43.78%",
    right: "-62.51%",
    bottom: "-20.56%",
    left: "-13.49%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  rectangle: {
    backgroundColor: Color.colorMaroon,
    //borderRadius: Border.br_mini,
    left: 0,
  },
  kcal: {
    fontSize: 23,
    fontFamily: FontFamily.orelegaOneRegular,
  },
  calories: {
    fontFamily: FontFamily.didactGothicRegular,
    //fontSize: FontSize.size_mini,
  },
  kcalCalories: {
    width: 144,
    height: 49,
    left: 4,
    textAlign: "center",
    top: 77,
  },
  twoYellowStars: {
    top: 15,
    left: 31,
    width: 86,
    height: 56,
    position: "absolute",
  },
  days: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 148,
    left: 0,
  },
  rectangle1: {
    backgroundColor: "#cf644d",
    //borderRadius: Border.br_mini,
    left: 0,
  },
  g: {
    fontFamily: FontFamily.orelegaOneRegular,
   // fontSize: FontSize.size_6xl,
  },
  gFats: {
    left: 10,
    width: 129,
    height: 51,
    top: 77,
    textAlign: "center",
    lineHeight: 20,
  },
  waterDropIcon: {
    left: 48,
    width: 72,
    top: 23,
    height: 55,
    position: "absolute",
  },
  days1: {
    left: 173,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    width: 148,
  },
  rectangle2: {
    backgroundColor: "#b8523b",
    //borderRadius: Border.br_mini,
    left: 0,
  },
  gCarbohydrates: {
    left: 21,
    width: 122,
    height: 42,
    top: 79,
    lineHeight: 20,
    textAlign: "left",
  },
  pinkPeach: {
    left: 34,
    height: 38,
  },
  allTime: {
    left: 0,
  },
  rectangle3: {
    backgroundColor: "#95321c",
   // borderRadius: Border.br_mini,
    left: 0,
  },
  gProteins: {
    width: 113,
    height: 48,
    left: 23,
    textAlign: "center",
    top: 79,
    lineHeight: 20,
  },
  pinkSalmonSteak: {
    left: 39,
    height: 38,
  },
  medianWeight: {
    left: 173,
  },
  groupChild: {
    top: 112,
    left: 115,
    width: 93,
    height: 93,
    position: "absolute",
  },
  daysParent: {
    top: 466,
    left: 55,
    width: 321,
    height: 319,
  },
  cardChild: {
    top: 137,
    //borderRadius: Border.br_8xs,
    backgroundColor: "#fdfdfd",
    width: 373,
    height: 146,
    //borderColor: Color.colorWhitesmoke,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2.5,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    position: "absolute",
  },
  subtitle: {
    top: 226,
    width: 340,
    height: 30,
   // color: Color.colorDimgray,
    left: 19,
    //fontSize: FontSize.size_mini,
    fontFamily: FontFamily.basicRegular,
  },
  title: {
    top: 164,
    fontSize: 22,
    width: 207,
    height: 38,
    fontFamily: FontFamily.orelegaOneRegular,
    color: Color.colorMaroon,
  },
  topViewOfJapaneseNoodleSoIcon: {
    left: 11,
    width: 393,
    height: 262,
    top: 0,
    position: "absolute",
  },
  card: {
    top: 517,
    width: 404,
    height: 283,
  },
  misoRamenAsianNoodlesWithIcon: {
    top: 481,
    left: 161,
    width: 354,
    height: 312,
  },
  mushroomAndEggRamenJapanRIcon: {
    top: 477,
    left: 118,
    width: 310,
    height: 263,
  },
  navBox: {
    height: "100%",
    bottom: "0%",
    borderColor: Color.colorMaroon,
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  moreIcon: {
    bottom: "54.67%",
    height: "45.33%",
    right: "0%",
    left: "0%",
    top: "0%",
    position: "absolute",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  more1: {
    width: "83.33%",
    top: "54.67%",
    left: "6.21%",
    height: "45.33%",
  },
  more: {
    height: "68.18%",
    top: "21.01%",
    right: "11.39%",
    bottom: "10.81%",
    left: "81.94%",
    width: "6.67%",
    position: "absolute",
  },
  mealPlannerIcon: {
    height: "55.1%",
    width: "61.36%",
    right: "18.43%",
    bottom: "44.9%",
    left: "20.2%",
  },
  pantry1: {
    height: "30%",
    top: "70%",
    left: "0%",
    width: "100%",
  },
  pantry: {
    height: "51.52%",
    width: "8.63%",
    top: "22.22%",
    right: "27.97%",
    left: "63.4%",
  },
  customerProfileIcon: {
    height: "57.32%",
    width: "91.83%",
    right: "6.54%",
    bottom: "42.68%",
    left: "1.63%",
  },
  profile1: {
    height: "27.32%",
    top: "72.68%",
    left: "0%",
    width: "100%",
  },
  profile: {
    height: "56.57%",
    top: "17.17%",
    right: "46.27%",
    left: "47.06%",
    width: "6.67%",
  },
  recipeIcon: {
    height: "59.25%",
    width: "44.88%",
    right: "28.01%",
    bottom: "40.75%",
    left: "27.11%",
  },
  recipes1: {
    height: "28.87%",
    top: "71.13%",
    left: "0%",
    width: "100%",
  },
  recipes: {
    height: "53.54%",
    width: "14.47%",
    top: "20.2%",
    right: "58.95%",
    left: "26.58%",
  },
  dashboardIcon: {
    height: "55%",
    width: "57.61%",
    right: "20.65%",
    bottom: "45%",
    left: "21.74%",
  },
  dashboard: {
    height: "50.51%",
    width: "10.02%",
    top: "22.93%",
    right: "79.52%",
    bottom: "26.57%",
    left: "10.46%",
    position: "absolute",
  },
  navigationTab: {
    top: 833,
    left: -15,
    width: 459,
    height: 99,
    position: "absolute",
  },
  home: {
    //borderRadius: Border.br_31xl,
    flex: 1,
    height: 932,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
