import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Dimensions, Image, ScrollView, TextInput } from "react-native";
import { fetch_data, update_data } from "../../Actions"
import { connect } from 'react-redux'
import {data} from "../../utils/myfunction"

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            mobile: '',
        }
    }

    validateEmail() {
        let reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg_email.test(this.state.email);
    }
    validatemobile(){
        let reg_phone = /^\d{10}$/;
        return reg_phone.test(this.state.mobile);
    }

    submit = () => {
        var{name,email,mobile}=this.state
        if(name === "" && email === "" &&  mobile === ""){
            alert("All fields are required")
        }else if(!this.validateEmail()){
            alert("Email Is incorrect")
        }else if(!this.validatemobile()){
            alert("Mobile Is incorrect")
        }else{
            alert("Checkout Done")
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ScrollView>
                    <View >
                        {this.props.productdata.map((item, index) => (
                            <>
                                {item.quantity === 0 ? null :
                                    <View style={{ height: 70, backgroundColor: "#FFFFFF", flexDirection: "row", marginTop: 16 }}>
                                        <Image style={{ width: 40, height: 40, marginTop: 16 }}
                                            source={{ uri: item.image }} />
                                        <View style={{ width: "40%", marginLeft: 16, marginTop: 16 }}>
                                            <Text>{item.name}</Text>
                                            <Text style={{ marginTop: 10 }}>{item.quantity}</Text>
                                        </View>
                                        <View style={{ width: "50%", marginTop: 16 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", }}>
                                                
                                                <View>
                                                    <Text style={{ marginLeft: 10, marginRight: 10 }}>Total:{item.price * item.quantity}</Text>
                                                </View>
                                                
                                            </View>
                                        </View>

                                    </View>
                                }
                            </>
                        ))}
                    </View>

                    <Text style={{marginTop: 10,}}>Total No. of Items: {this.props.total[0].total_quantity}</Text>
                    <Text style={{marginTop: 10,}}>Grand Total {this.props.total[0].total_price}</Text>

                    <View style={{ marginTop: 10, height: 300, backgroundColor: "#FFFFFF" }}>

                        <TextInput placeholder="Enter Name"
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name} />

                        <TextInput placeholder="Enter Email ID"
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                            keyboardType={"email-address"} />

                        <TextInput placeholder="Enter Mobile No"
                            onChangeText={(mobile) => this.setState({ mobile })}
                            value={this.state.mobile}
                            keyboardType={"number-pad"} />

                        <TouchableOpacity style={{justifyContent: "center", alignItems: "center"}}
                        onPress={()=>this.submit()}>
                            <Text>Checkout</Text>

                        </TouchableOpacity>

                    </View>
                
                
                </ScrollView>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        loder: state.loder,
        productdata: state.productdata.productdata,
        total:data(state.productdata.productdata)
    }
}
export default connect(mapStateToProps, { fetch_data, update_data })(Cart)