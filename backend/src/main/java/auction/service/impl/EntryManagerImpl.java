package auction.service.impl;

import auction.dao.EntryDAO;
import auction.model.Entry;
import auction.service.EntryManager;
import org.springframework.transaction.annotation.Transactional;

public class EntryManagerImpl implements EntryManager{

    private EntryDAO entryDAO;

    public void setEntryDAO(EntryDAO entryDAO){
        this.entryDAO = entryDAO;
    }

    @Override
    @Transactional
    public void createEntry(Entry entry) {
        entryDAO.createNewEntry(entry);
    }
}
