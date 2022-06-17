package lk.pos.dao;

/**
 * @author : Kavishka Prabath
 * @since : 0.1.0
 **/

public class DAOFactory {

    private static DAOFactory daoFactory;

    private DAOFactory() {
    }

    public static DAOFactory getDaoFactory() {
        if (daoFactory == null) {
            daoFactory = new DAOFactory();
        }
        return daoFactory;
    }

    public SuperDAO getDAO(DAOTypes types){

        switch (types){
            default:
                return null;
        }
    }

    public enum DAOTypes{
    }
}
