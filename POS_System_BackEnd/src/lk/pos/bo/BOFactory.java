package lk.pos.bo;

import lk.pos.bo.custom.impl.CustomerBOImpl;

/**
 * @author : Kavishka Prabath
 * @since : 0.1.0
 **/

public class BOFactory {

    private static BOFactory boFactory;

    private BOFactory(){

    }

    public static BOFactory getBoFactory(){
        if (boFactory == null){
            boFactory = new BOFactory();
        }
        return  boFactory;
    }

    public SuperBO getBO(BOTypes types){
        switch (types){
            case CUSTOMER:
                return new CustomerBOImpl();
            default:
                return null;
        }
    }

    public enum BOTypes{
        CUSTOMER
    }
}