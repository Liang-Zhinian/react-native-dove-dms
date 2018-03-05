/*
 *  Copyright (C) 2013 RICOH Co.,LTD.
 *  All rights reserved.
 */
package com.dove.sample.wrapper.rws.service.fax;

import java.util.Map;

import com.dove.sample.wrapper.common.Element;
import com.dove.sample.wrapper.common.ResponseBody;

public class CreateJobResponseBody extends Element implements ResponseBody {

    private static final String KEY_JOB_ID  = "jobId";

    CreateJobResponseBody(Map<String, Object> values) {
        super(values);
    }

    /*
     * jobId (String)
     */
    public String getJobId() {
        return getStringValue(KEY_JOB_ID);
    }

}