import { StyleSheet, Dimensions } from 'react-native';

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
        marginBottom: 10 
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
    banner: { 
        marginVertical: 10, 
        borderRadius: 10, 
        overflow: 'hidden', 
        backgroundColor: '#ff99cc', 
        padding: 15 
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
        backgroundColor: '#3399ff', 
        padding: 10, 
        borderRadius: 10, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: 10 
    },
    dealTitle: { 
        color: '#fff', 
        fontWeight: 'bold' 
    },
    dealTimer: { 
        color: '#fff' 
    },
    viewAllButton: { 
        backgroundColor: '#0055cc', 
        padding: 5,
         borderRadius: 5 
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
        marginTop: 5,
      },

});

export default Styles