import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Dimensions, Image } from "react-native";
import { fetch_data, update_data } from "../../Actions"
import { connect } from 'react-redux'

class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productdata: []
        }
    }

    componentDidMount = async () => {
        this.getData();
        this.setState({
            productdata: this.props.productdata
        })
    }

    getData = async () => {
        await this.props.fetch_data()
    }

    addquantity = (index, name) => {
        if (name === "plus") {
            this.props.productdata[index].quantity = this.props.productdata[index].quantity + 1
            console.log("update", this.props.productdata);
            const data = this.props.productdata
            this.props.update_data(data)
        } else if (name === "minus") {
            this.props.productdata[index].quantity = this.props.productdata[index].quantity - 1
            console.log("update", this.props.productdata);
            const data = this.props.productdata
            this.props.update_data(data)
        }

    }

    render() {
        console.log("render", this.props.productdata);
        if (this.props.loder) {
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator />
            </View>
        }

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                <View style={{ marginRight: 16, marginLeft: 16 }}>
                    {this.props.productdata.map((item, index) => (
                        <View style={{ height: 70, backgroundColor: "#FFFFFF", flexDirection: "row", marginTop: 16 }}>
                            <Image style={{ width: 40, height: 40, marginTop: 16 }}
                                source={{ uri: item.image }} />
                            <View style={{ width: "40%", marginLeft: 16, marginTop: 16 }}>
                                <Text>{item.name}</Text>
                                <Text style={{ marginTop: 10 }}>{item.price}</Text>
                            </View>
                            <View style={{ width: "50%", marginTop: 16 }}>
                                <Text>Add to Cart</Text>
                                <View style={{ flexDirection: "row", alignItems: "center", }}>
                                    <TouchableOpacity style={{ width: "10%" }} onPress={() => this.addquantity(index, "minus")}
                                        disabled={item.quantity === 0 ? true : false}>
                                        <Text style={{ width: "100%", backgroundColor: "red" }} >-</Text>
                                    </TouchableOpacity>
                                    <View>
                                        <Text style={{ marginLeft: 10, marginRight: 10 }}>{item.quantity}</Text>
                                    </View>
                                    <TouchableOpacity style={{ width: "10%" }} onPress={() => this.addquantity(index, "plus")}>
                                        <Text style={{ width: "100%", backgroundColor: "red" }} onPress={() => this.addquantity(index, "plus")}>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>
                    ))}


                </View>
                <TouchableOpacity style={{ bottom: 0, position: "absolute", width: "100%", height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" }}>
                    <Text onPress={() => this.props.navigation.navigate('Cart')}>Go To Cart</Text>
                </TouchableOpacity>

            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        loder: state.loder,
        productdata: state.productdata.productdata
    }
}
export default connect(mapStateToProps, { fetch_data, update_data })(Products);