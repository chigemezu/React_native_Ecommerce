import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const Styles = StyleSheet.create({
    container:{ 
        flex: 1, 
        backgroundColor: '#fff', 
        padding: 10,
        marginTop:40
    },
    header:{ 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 10 ,
        fontWeight:"bold",
        fontSize:18
    },
    logo: { 
        width: 40, 
        height: 40, 
        resizeMode: 'contain',
    },
    profile: { 
        width: 40, 
        height: 40, 
        borderRadius: 20 
    },
    searchContainer: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#f1f1f1', 
        borderRadius: 8, 
        paddingHorizontal: 10, 
        marginBottom: 10 
    },
    searchInput: { 
        flex: 1, 
        height: 40 
    },
    categoryScroll: { 
        marginBottom: 10 
    },
    categoryItem: { 
        alignItems: 'center', 
        marginRight: 15 
    },
    categoryImage: { 
        width: 50, 
        height: 50, 
        borderRadius: 25, 
        marginBottom: 5 
    },
    categoryView:{
        width:'100%',
        height:60,
    },
    banner: { 
        marginVertical: 10, 
        borderRadius: 10, 
        overflow: 'hidden', 
      //  backgroundColor: '#ff99cc', 
        padding: 10 
    },
    bannerImage: { 
        width: '100%', 
        height: 150, 
        resizeMode: 'cover', 
        borderRadius: 10 
    },
    bannerText: { 
        position: 'absolute', 
        top: 20, 
        left: 20, 
        fontSize: 24, 
        color: '#fff', 
        fontWeight: 'bold' 
    },
    bannerSubText: { 
        position: 'absolute', 
        top: 60,
         left: 20, 
        fontSize: 16, 
        color: '#fff' 
    },
    dealContainer: { 
        backgroundColor: 'black', 
        padding: 10, 
        borderRadius: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 10 
    },
    dealTitle: { 
        color: '#fff', 
        fontWeight: 'bold',
        fontSize:12 
    },
    dealTimer: { 
        color: '#fff',
        fontSize:12  
    },
    viewAllButton: { 
        backgroundColor: '#ff3b5c', 
        padding: 5,
         borderRadius: 5 ,
         fontSize:12 
        },
   

    productItem: {
        width: width / 2 - 20, // 2 items per row
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        elevation: 3, // Android shadow
      },
      productImage: {
        width: '100%',
        height: 120,
        resizeMode: 'contain',
        borderRadius: 8,
      },
      name: {
        fontWeight: '600',
        marginTop: 5,
      },
      description: {
        fontSize: 12,
        color: '#666',
      },
      price: {
        fontWeight: 'bold',
        fontSize:14
      },
      discount:{
        color: '#ff3b5c',
        fontSize: 12,
        alignItems:"flex-end",
        alignContent:"flex-end"
      },
      priceRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
     },
     card: {
        backgroundColor: "#eee",
        borderRadius: 14,
        padding: 16,
        marginBottom: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "700",
    },
    subtitle: {
        fontSize: 13,
        color: "#666",
        marginTop: 4,
    },
    image: {
        width: 90,
        height: 90,
        resizeMode: "contain",
    },

});

export default Styles