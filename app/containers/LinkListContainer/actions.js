/*
 *
 * LinkListContainer actions
 *
 */

import {
  REQUEST_LINK_FAILED,
  REQUEST_LINK_SUCCEEDED,
  REQUEST_LINKS,
} from './constants';

export function requestLinks(topicName) {
  return {
    type: REQUEST_LINKS, 
    topicName
  };
}

export function requestLinksSucceeded(links) {
  return {
    type: REQUEST_LINK_SUCCEEDED,
    links
  };
}

export function requestLinksFailed(message) {
  return {
    type: REQUEST_LINK_FAILED,
    message
  };
}
