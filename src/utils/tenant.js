import Cookies from 'js-cookie'
import { DefaultTenancyName } from '@/settings'
const TenantIdKey = 'Abp.TenantId'

export function getTenantId() {
  return Cookies.get(TenantIdKey)
}

export function setTenantId(tenantId) {
  return Cookies.set(TenantIdKey, tenantId)
}

export function removeTenantId() {
  return Cookies.remove(TenantIdKey)
}

function getSubdomain(hostname) {
  var regexParse = new RegExp('[a-z\-0-9]{2,63}\.[a-z\.]{2,5}$');
  var urlParts = regexParse.exec(hostname);
  return hostname.replace(urlParts[0], '').slice(0, -1);
}

//Determining Current Tenant
export function getTenancyName() {
  return '';
  // return 'default'
  //todo: Hoang: only remove above return when apply multi tenant to project
  const hostName = window.location.hostname
  const subDomain = getSubdomain(hostName)
  if (hostName === 'localhost') {
    return DefaultTenancyName
  }
  if (!subDomain) {
    return hostName
  } else {
    return subDomain
  }
}

