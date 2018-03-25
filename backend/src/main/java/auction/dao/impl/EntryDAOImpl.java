package auction.dao.impl;

import javax.sql.DataSource;

import auction.dao.EntryDAO;
import auction.model.Entry;
import org.springframework.jdbc.core.JdbcTemplate;

public class EntryDAOImpl implements EntryDAO {

    private DataSource dataSource;

    public void setDataSource(DataSource dataSource){
        this.dataSource = dataSource;
    }

    @Override
    public void createNewEntry(Entry entry) {
        String queryEntry = "INSERT INTO entry (id, lot_id, user_id, price) VALUES (?,?,?,?)";

        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        jdbcTemplate.update(queryEntry, new Object[] { entry.getId(),
                entry.getLotId(), entry.getUserId(), entry.getPrice() });
        System.out.println("Inserted into entry table successfully");
    }
}
