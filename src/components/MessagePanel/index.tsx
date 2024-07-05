import { useI18n } from '@/hooks';
import { Badge, Button, Popover, Tooltip } from 'antd';
import { BellOutlined } from '@ant-design/icons';

export const MessagePanel: React.FC = () => {
  const { t } = useI18n();
  return (
    <Tooltip title={ t('global.header.tooltip.messages') } mouseEnterDelay={ 1 }>
      <Popover title={ '消息' } trigger="click">
        <Badge dot size="small" count={ 0 } offset={ [-10, 10] }>
          <Button type="text" size="large" className="hover:!text-white">
            <BellOutlined/>
          </Button>
        </Badge>
      </Popover>
    </Tooltip>
  );
};
